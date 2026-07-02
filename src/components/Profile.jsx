import { Card, Avatar, Text, Group, Button } from "@mantine/core";

export default function Profile({ user }) {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Group>
        <Avatar src={user.avatar} size={80} radius="xl" />
        <div>
          <Text fw={700} size="lg">{user.name}</Text>
          <Text c="dimmed">@{user.username}</Text>
        </div>
      </Group>

      <Text mt="md">{user.bio}</Text>

      <Group mt="md">
        <Text>{user.followers} Followers</Text>
        <Text>{user.following} Following</Text>
      </Group>

      <Button mt="lg">Edit Profile</Button>
    </Card>
  );
}
