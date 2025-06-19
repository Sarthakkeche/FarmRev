import { useEffect, useState } from "react";
import axios from "axios";

function ChatBox({ currentUserId, selectedUser }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const fetchMessages = async () => {
    const res = await axios.get(`https://farmrev-backend.onrender.com/api/chat/get/${currentUserId}/${selectedUser._id}`);
    setMessages(res.data);
  };

  useEffect(() => {
    if (selectedUser) fetchMessages();
  }, [selectedUser]);

  const sendMessage = async () => {
    if (!newMessage.trim()) return;
    await axios.post("https://farmrev-backend.onrender.com/api/chat/send", {
      senderId: currentUserId,
      receiverId: selectedUser._id,
      content: newMessage,
    });
    setNewMessage("");
    fetchMessages(); // Refresh
  };

  return (
    <div className="border p-4 w-full max-w-lg">
      <h3 className="font-bold mb-2">Chat with {selectedUser.name}</h3>
      <div className="h-64 overflow-y-auto bg-gray-100 p-2 rounded">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-1 ${msg.senderId === currentUserId ? "text-right" : "text-left"}`}>
            <span className="bg-white inline-block px-3 py-1 rounded shadow">{msg.content}</span>
          </div>
        ))}
      </div>
      <div className="flex mt-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border rounded px-2 py-1"
        />
        <button onClick={sendMessage} className="bg-green-500 text-white px-4 ml-2 rounded">Send</button>
      </div>
    </div>
  );
}

export default ChatBox;
