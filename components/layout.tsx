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
      <div className="fixed top-0 flex items-center w-full py-4 text-lg font-medium text-gray-700 bg-white border-b">
        {title ? <span>{title}</span> : null}
      </div>
      {children}
      {hasTabBar ? <nav></nav> : null}
    </div>
  );
}
