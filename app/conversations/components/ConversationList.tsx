"use client";

import clsx from "clsx";
import useConversation from "@/app/hooks/useConversation";
import { FullConversationType } from "@/app/types";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { MdOutlineGroupAdd } from "react-icons/md";
import ConversationBox from "./ConversationBox";
import GroupChatModal from "./GroupChatModal";
import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { pusherClient } from "@/app/libs/pusher";
import { find } from "lodash";

interface ConversationListProps{
    initialItems: FullConversationType[];
    users:User[]
}

const ConversationList: React.FC<ConversationListProps> = ({
    initialItems,
    users
}) => {
    const session = useSession();
    const [items, setItems] = useState(initialItems);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    const { conversationId, isOpen} = useConversation();

    const pusherKey = useMemo(() =>{
            return session.data?.user?.email;
    },[session.data?.user?.email]);

    useEffect(() => {
                if(!pusherKey){
                    return;
                }
                pusherClient.subscribe(pusherKey);

                const newHandler = (conversation: FullConversationType) =>{
                             setItems((current) => {
                                if(find(current,{id:conversation.id})){
                                    return current;
                                }

                                return[conversation,...current];
                             })
                };

                const updateHandler = (conversation: FullConversationType) => {
                    setItems((current) => current.map((currentConversation) => {
                        if(currentConversation.id === conversation.id){
                            return {
                                ...currentConversation,
                                messages: conversation.messages
                            }
                        }

                        return currentConversation;
                    }))
                }

                const removeHandler = (conversation : FullConversationType) =>{
                        setItems((current) => {
                            return [...current.filter((convo) => convo.id != conversationId)]
                        });
                        if(conversationId === conversation.id){
                            router.push('/conversations');
                        }
                };

                pusherClient.bind('conversation:new',newHandler);
                pusherClient.bind('conversation:update',updateHandler);
                pusherClient.bind('conversation:remove',removeHandler);

                return () =>{
                    pusherClient.unsubscribe(pusherKey);
                    pusherClient.unbind('conversation:new',newHandler);
                    pusherClient.unbind('conversation:update',updateHandler);
                    pusherClient.unbind('conversation:remove',removeHandler);
                }
    },[pusherKey,conversationId,router]);

    return (  
        <>
            <GroupChatModal
                users={users}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
            <aside
                className={clsx(`
                    fixed
                    inset-y-0
                    pb-20
                    lg:pb-0
                    lg:left-20
                    lg:w-80
                    lg:block
                    overflow-y-auto
                    bg-[url('../public/images/background.jpg')] h-screen bg-cover bg-center
                `,
                isOpen? 'hidden' :  'block w-full left 0'
            )}
            >
                    <div className="px-5">
                            <div className="flex justify-between mb-4 pt-4">
                                    <div className="
                                        text-2xl
                                        font-bold
                                        text-white
                                    ">
                                        Messages
                                    </div>
                                        <div 
                                            onClick={() => setIsModalOpen(true)}
                                            className="
                                            rounded-full
                                            p-2
                                            bg-gray-800
                                            text-green-300
                                            shadow-lg shadow-gray-900/30
                                            cursor-pointer
                                            hover:opacity-75
                                            transition
                                        ">
                                        <MdOutlineGroupAdd size={30}/>
                                        </div>
                            </div>
                                {items.map((item) => (
                                    <ConversationBox
                                        key={item.id}
                                        data={item}
                                        selected={conversationId === item.id}
                                    />
                                ))}
                    </div>
            </aside>
        </>
    );
}
 
export default ConversationList;