import React, { useActionState } from "react";
import useAuthStore from "@/stores/useAuthStore";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const signUp = useAuthStore((auth) => auth.signUp);

  const [state, formAction, isPending] = useActionState(
    async (_prevState: any, formData: FormData) => {
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      const confirmPassword = formData.get("confirmPassword") as string;

      if (password !== confirmPassword) {
        return { error: "Kata sandi tidak cocok." };
      }

      if (password.length < 8) {
        return { error: "Kata sandi minimal harus 8 karakter." };
      }

      try {
        await signUp(email, password);
        console.log("Signup berhasil untuk:", name);
        return { error: null };
      } catch (error: any) {
        return { error: error.message || "Terjadi kesalahan saat mendaftar." };
      }
    },
    { error: null },
  );

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Buat akun Anda</CardTitle>
          <CardDescription>
            Masukkan detail Anda di bawah ini untuk membuat akun baru
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Menggunakan action menggantikan onSubmit */}
          <form action={formAction}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Nama Lengkap</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Budi Santoso"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="nama@contoh.com"
                  required
                />
              </Field>

              <Field>
                <div className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Kata Sandi</FieldLabel>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Konfirmasi
                    </FieldLabel>
                    <Input
                      id="confirm-password"
                      name="confirmPassword"
                      type="password"
                      required
                    />
                  </Field>
                </div>
                <FieldDescription>Minimal harus 8 karakter.</FieldDescription>
              </Field>

              {/* Menampilkan error dari state action */}
              {state?.error && (
                <p className="text-sm font-medium text-destructive text-center">
                  {state.error}
                </p>
              )}

              <Field>
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? "Mendaftarkan..." : "Daftar Sekarang"}
                </Button>
                <FieldDescription className="text-center">
                  Sudah punya akun?{" "}
                  <Link to="/sign-in" className="underline hover:text-primary">
                    Masuk
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      <FieldDescription className="px-6 text-center text-xs">
        Dengan mengklik lanjut, Anda menyetujui{" "}
        <a href="#" className="underline">
          Ketentuan Layanan
        </a>{" "}
        dan{" "}
        <a href="#" className="underline">
          Kebijakan Privasi
        </a>{" "}
        kami.
      </FieldDescription>
    </div>
  );
}
