import { Helmet } from "react-helmet-async";

export default function Construction() {
  return (
    <>
      <Helmet>
        <title>Page en construction — Trouve ton artisan</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="empty">
        <div className="empty-illustration" aria-hidden>🚧</div>
        <h1>Page en construction</h1>
        <p>Cette section arrive très vite.</p>
      </section>
    </>
  );
}
