"use client";

import {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "@/lib/firebase";
import {useRouter} from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err) {
      setError("Giriş başarısız: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        className="bg-white p-6 rounded shadow-md w-full max-w-md text-gray-900"
        onSubmit={handleLogin}
      >
        <h1 className="text-2xl font-semibold mb-4 text-center">Giriş Yap</h1>
        <input
          type="email"
          placeholder="E-posta"
          className="w-full p-2 border border-gray-300 rounded mb-4 "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifre"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Giriş Yap
        </button>
        <p className="mt-4 text-center text-sm">
          Hesabın yok mu?{" "}
          <a href="/register" className="text-blue-600 underline">
            Kayıt ol
          </a>
        </p>
      </form>
    </div>
  );
}
