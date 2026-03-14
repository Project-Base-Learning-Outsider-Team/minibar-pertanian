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
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useActionState } from "react"; // Hook terbaru di React 19
import useAuthStore from "@/stores/useAuthStore";
import { handleSignin } from "@/services/authService";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const signIn = useAuthStore((s) => s.signIn);

  const [state, formAction, isPending] = useActionState(
    async (_prevState: any, formData: FormData) => {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      try {
        await signIn(email, password);
        console.log("Login berhasil");
        return { error: null };
      } catch (err: any) {
        console.error("Login gagal", err);
        return { error: err.message || "Email atau kata sandi salah." };
      }
    },
    { error: null },
  );

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Selamat Datang</CardTitle>
          <CardDescription>
            Masuk ke akun Anda untuk melanjutkan
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Hubungkan langsung ke formAction */}
          <form action={formAction}>
            <FieldGroup>
              <Field>
                <Button
                  variant="outline"
                  type="button"
                  className="w-full"
                  onClick={handleSignin}
                  disabled={isPending}
                >
                  Masuk dengan Google
                </Button>
              </Field>

              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card text-muted-foreground">
                Atau lanjut dengan
              </FieldSeparator>

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
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Kata Sandi</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto text-sm text-muted-foreground underline-offset-4 hover:underline hover:text-primary"
                  >
                    Lupa kata sandi?
                  </a>
                </div>
                <Input id="password" name="password" type="password" required />
              </Field>

              {state?.error && (
                <p className="text-sm font-medium text-destructive text-center">
                  {state.error}
                </p>
              )}

              <Field>
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? "Memproses..." : "Masuk"}
                </Button>

                <FieldDescription className="text-center">
                  Belum punya akun?{" "}
                  <Link to="/sign-up" className="underline hover:text-primary">
                    Daftar
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      {/* Footer Links */}
      <FieldDescription className="px-6 text-center text-xs text-muted-foreground">
        Dengan mengklik lanjut, Anda menyetujui{" "}
        <a href="#" className="underline">
          Ketentuan Layanan
        </a>{" "}
        dan{" "}
        <a href="#" className="underline">
          Kebijakan Privasi
        </a>
      </FieldDescription>
    </div>
  );
}
