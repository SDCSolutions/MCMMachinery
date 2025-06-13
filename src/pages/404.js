import * as React from "react";
import { navigate } from "gatsby";
import Layout from "../components/Layout";

export default function NotFoundPage() {
  const [secondsLeft, setSecondsLeft] = React.useState(30);

  React.useEffect(() => {
    if (secondsLeft <= 0) {
      navigate("/", { replace: true });
      return;
    }
    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsLeft]);

  return (
    <Layout>
      <main style={{ textAlign: "center", padding: "3em 1em" }}>
        <h1>Page Not Found</h1>
        <p>
          The page you’re looking for doesn’t exist.<br />
          You will be redirected to the home page in <strong>{secondsLeft}</strong> seconds.
        </p>
        <p>
          <a href="/">Go to Home Now</a>
        </p>
      </main>
    </Layout>
  );
}