"use client";

import { useState } from "react";
import { Modal } from "@/components/Modal/Modal";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

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
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="col-span-3 border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
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
