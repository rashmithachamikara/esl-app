"use client";

import { useState } from "react";
import { Modal } from "@/components/Modal/Modal";

export default function Page() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const handleSave = () => {
    console.log("Save changes clicked");
    // Add your save logic here
  };

  return (
    <div>
      <h1>Modal Demo Page</h1>
      <Modal
        buttonLabel="Edit Profile"
        dialogTitle="Edit profile"
        dialogDescription="Make changes to your profile here. Click save when you're done."
        onSave={handleSave}
      >
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3 border border-gray-300 rounded-md p-2" // Add box styling
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Username
            </label>
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="col-span-3 border border-gray-300 rounded-md p-2" // Add box styling
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
