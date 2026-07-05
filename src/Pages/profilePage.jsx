import { Card, Avatar, Text, Group, Button, Input } from "@mantine/core";
import {useState} from "react"
import useProfile from "../hooks/useProfile";
import { useUser } from "../context/UserContext";

export default function ProfilePage() {
  const { userName, updateUser } = useUser();;
  const [inputUser, setInputUser] = useState(userName);

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "20px" }}>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Text mt="md">{userName}</Text>
        <Input onChange = {(e) => setInputUser(e.target.value)} size="lg" placeholder="User Name" />
        <Button onClick = {() => updateUser(inputUser)} variant="filled" mt="lg">
          Save
        </Button>
      </Card>
    </div>
  );
}
