
import Provider from "./provider";
import ThemeSwitcher from "./ThemeSwitcher";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
    <Provider>
      <ThemeSwitcher></ThemeSwitcher>
      {children}
      </Provider>
      </body>
       </html> 
  );
}
