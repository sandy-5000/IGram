import MainLayout from "/src/layouts/MainLayout"
import { RiSendPlaneFill } from "react-icons/ri"

const getMessage = () => {
  return (
    <div className="bg-gray-300 dark:bg-gray-700 p-4 rounded text-sm text-gray-700 dark:text-gray-300">
      <p className="font-semibold">Vikram Mehta:</p>
      <p>110 / 500 or video kab daalooge</p>
      <p className="text-xs text-gray-500 mt-2">19:36</p>
    </div>
  )
}

const MessageList = () => {
  return (
    <div
      style={{ height: 'calc(100vh - 140px)' }}
      className="flex-1 p-4 space-y-3 overflow-y-scroll"
    >
      {
        Array(10).fill(0).map(() => getMessage())
      }
    </div>
  )
}

const ChatInput = () => {
  return (
    <div className="p-4 pr-20 relative flex h-[80px]">
      <input
        type="text"
        className="w-full p-3 dark:bg-slate-700 dark:text-slate-200 rounded"
        placeholder="Write your message..."
      />
      <div className="h-full p-1 pr-0">
        <button className="ml-2 h-full aspect-square a-center right-2 rounded-md ring-2 ring-sky-600 dark:ring-sky-500 cursor-pointer">
          <span className="text-slate-800 dark:text-slate-200">
            <RiSendPlaneFill size={20} />
          </span>
        </button>
      </div>
    </div>
  )
}

const ChatScreen = () => {
  return (
    <div className="flex" style={{ height: 'calc(100vh - 60px)' }}>
      <div className="flex-1 flex flex-col">
        <MessageList />
        <ChatInput />
      </div>
    </div>
  )
}

const Chat = () => {
  return (
    <MainLayout>
      <ChatScreen />
    </MainLayout>
  )
}

export default Chat
