"use client";

import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import { MdOutlineAttachFile } from "react-icons/md";
import MessageInput from "./MessageInput";
import {CldUploadButton} from "next-cloudinary";


const Form = () => {
    const {conversationId} = useConversation();

    const {
        register,
        handleSubmit,
        setValue,
        formState:{
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues:{
            message:''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) =>{
        setValue('message','',{shouldValidate: true});
      
        axios.post('/api/messages',{
            ...data,
            conversationId
        })
    };

    const handleUpload = (result: any) => {
        axios.post('/api/messages', {
            image: result?.info?.secure_url,
            conversationId
        })
    }

    return ( 
        <div
            className="
            py-4
            px-4
            bg-slate-800
            flex
            items-center
            gap-2
            lg:gap-4
            w-full
            "
        >
                <CldUploadButton
                    options={{maxFiles : 1}}
                    onUpload={handleUpload}
                    uploadPreset="i0fp03q4"
                >
                  <MdOutlineAttachFile size={30} className="text-green-400 "/>
                </CldUploadButton>
                <form 
                onSubmit={handleSubmit(onSubmit)}
                    className="flex items-center gap-2 lg:gap-4 w-full"
                >
                        <MessageInput
                            id="message"
                            register={register}
                            errors={errors}
                            required
                            placeholder="Type messages!"
                        />
                        <button
                            type="submit"
                            className="
                                rounded-full
                                p-2
                                bg-green-600
                                shadow-lg shadow-green-400/50
                                cursor-pointer
                                hover:bg-green-400
                                hover:shadow-green-400/100
                                transition
                            "
                        >
                                <HiPaperAirplane
                                    size={18}
                                    className="
                                        text-white
                                    "
                                />
                        </button>
                </form>
        </div>
     );
}
 
export default Form;