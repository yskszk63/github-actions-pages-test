import Link from "next/link";

export default function Index() {
  const targets = [
    "World",
    "GitHub Actions",
    "GitHub Pages",
    "Next.js",
  ];

  return (
    <>
      <p>Hello...</p>
      <ul>
        {targets.map((name, index) => <li key={index}><Link href={name}>{name}</Link></li>)}
      </ul>
    </>
  );
}
