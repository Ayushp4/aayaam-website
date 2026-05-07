import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { LangProvider } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingLetters } from "@/components/FloatingLetters";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-warm-gradient px-4">
      <div className="max-w-md text-center">
        <div className="font-hindi-display text-9xl text-gradient-saffron">४०४</div>
        <h2 className="mt-4 font-hindi text-2xl text-maroon">पृष्ठ नहीं मिला</h2>
        <p className="mt-2 text-sm text-muted-foreground">यह पन्ना खो गया है शब्दों के सागर में।</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-saffron-gradient px-6 py-2.5 text-sm font-medium text-cream shadow-warm">
          मुखपृष्ठ पर लौटें
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-warm-gradient px-4">
      <div className="max-w-md text-center">
        <h1 className="font-hindi-display text-3xl text-maroon">कुछ अनुचित हुआ</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-full bg-saffron-gradient px-6 py-2.5 text-sm font-medium text-cream shadow-warm"
        >
          पुनः प्रयास करें
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AAYAAM · आयाम — Hindi Literary & Cultural Club, NIT Trichy" },
      { name: "description", content: "AAYAAM — आयाम, the Hindi Literary & Cultural Club of NIT Trichy. Bhasha Se Bhav Tak. Since 2006." },
      { property: "og:title", content: "AAYAAM · आयाम — NIT Trichy" },
      { property: "og:description", content: "शब्दों से भाव तक — Hindi Literary & Cultural Club, NIT Trichy." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <LangProvider>
        <div className="paper-texture min-h-screen">
          <FloatingLetters />
          <Header />
          <Outlet />
          <Footer />
        </div>
      </LangProvider>
    </QueryClientProvider>
  );
}
