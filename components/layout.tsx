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
      <div className="fixed top-0 flex items-center justify-center w-full py-3 text-lg font-medium text-gray-800 bg-white border-b">
        {title ? <span>{title}</span> : null}
      </div>
      <div className={cls("pt-16", hasTabBar ? "pb-16" : "")}>{children}</div>
      {hasTabBar ? (
        <nav className="fixed bottom-0 flex items-center justify-between pt-3 pb-10 text-gray-800 bg-white border-t"></nav>
      ) : null}
    </div>
  );
}
