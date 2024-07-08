const EmptyState = () => {
    return (  
        <div className="
            px-4
            py-10
            sm:px-6
            lg:px-8
            flex
            justify-center
            items-center
            bg-[url('../public/images/chat-back.jpg')] h-screen bg-cover bg-center
        ">
            <div className="text-center items-center flex flex-col">
                
                <h3 className=" mt-2 text-2xl 
                                font-semibold 
                            text-white">
                    Select a Chat or Start New Conversation
                    </h3>
            </div>
        </div>
    );
}
 
export default EmptyState;