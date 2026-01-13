import { useState, useEffect } from "react";

type AuthAction = (formData: FormData) => Promise<{
  error?: string;
  success?: boolean;
  message?: string;
}>;
export function useAuthForm(authAction: AuthAction, redirectUrl: string) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);
  const handleSubmit = async (formData: FormData) => {
    setIsPending(true);
    setErrorMessage(null);
    try {
      const result = await authAction(formData);

      if (result.success || result.success) {
        window.location.href = redirectUrl;
      } else {
        setErrorMessage(
          result.message || result.error || "Ein Fehler ist aufgetreten",
        );
      }
    } catch (err) {
      setErrorMessage("Verbindung zum Server fehlgeschlagen");
    } finally {
      setIsPending(false);
    }
  };

  return { handleSubmit, errorMessage, isPending, setErrorMessage };
}
