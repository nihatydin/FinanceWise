"use client";

import {useState} from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "@/lib/firebase";
import {useRouter} from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== passwordConfirm) {
      setError("Şifreler uyuşmuyor!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/login");
    } catch (err) {
      setError("Kayıt sırasında hata: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded shadow-md w-full max-w-md text-gray-900"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Kayıt Ol</h2>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
          minLength={6}
        />

        <input
          type="password"
          placeholder="Şifre Tekrar"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
          minLength={6}
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Kayıt Ol
        </button>

        <p className="mt-4 text-center text-sm">
          Zaten hesabın var mı?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Giriş Yap
          </a>
        </p>
      </form>
    </div>
  );
}
