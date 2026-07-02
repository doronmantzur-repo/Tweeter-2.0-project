import { AppShell, Group, Button, Text } from "@mantine/core";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Text fw={700} size="lg">Tweeter</Text>

          <Group>
            <Button variant="subtle" component={Link} to="/">Home</Button>
            <Button variant="subtle" component={Link} to="/explore">Explore</Button>
            <Button variant="subtle" component={Link} to="/profile">Profile</Button>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
