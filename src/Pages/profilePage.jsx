import { useState, useEffect } from "react";
import "./ProfilePage.css";
import { supabase } from "../utils/supabaseClient";
import {
  TextInput,
  PasswordInput,
  Button,
  Paper,
  Title,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAuth } from "../auth/AuthProvider";

export default function ProfilePage() {
  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);
  const { activeUser } = useAuth();
  const { onLogout } = useAuth();
  const { onLogin } = useAuth();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (values) => {
    let error = await onLogin(values.email, values.password);
    if (error) {
      setError(error);
    }
  };

  if (!activeUser) {
    return (
      <dev className="profile-page">
        <Paper
          shadow="md"
          radius="md"
          p="xl"
          withBorder
        >
          <Title order={3} mb="md">
            Login
          </Title>

          <form onSubmit={form.onSubmit(handleLogin)}>
            <TextInput
              label="Email"
              placeholder="doron@example.com"
              {...form.getInputProps("email")}
            />

            <PasswordInput
              label="Password"
              placeholder="password"
              mt="md"
              {...form.getInputProps("password")}
            />

            {error && (
              <Text style={{ color: "red" }} mt="sm">
                {error.message + (error.details ? ` (${error.details})` : "")}
              </Text>
            )}

            <Button type="submit" fullWidth mt="xl">
              Sign In
            </Button>
          </form>
        </Paper>
      </dev>
    );
  }

  return (
    <dev className="profile-page">
      <Paper shadow="md" radius="md" p="xl" withBorder>
        <Title order={3}>Welcome, {activeUser.email}</Title>
        <Text mt="md">You are logged in and authorized.</Text>

        <Button
          mt="xl"
          color="red"
          onClick={() => {
            onLogout();
          }}
        >
          Logout
        </Button>
      </Paper>
    </dev>
  );
}
