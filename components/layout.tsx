import { cls } from "../libs/utils";

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  return (
    <div>
      <div className="fixed top-0 flex items-center justify-center w-full max-w-xl py-3 text-lg font-medium text-gray-800 bg-white border-b">
        {title ? <span>{title}</span> : null}
      </div>
      <div className={cls("pt-16", hasTabBar ? "pb-16" : "")}>{children}</div>
      {hasTabBar ? (
        <nav className="fixed bottom-0 flex items-center justify-between max-w-xl pt-3 pb-10 text-gray-800 bg-white border-t">
          <div className="flex flex-col items-center space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <span>홈</span>
          </div>
        </nav>
      ) : null}
    </div>
  );
}
