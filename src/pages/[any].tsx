import { useRouter } from "next/router";

export default function Any() {
  const router = useRouter();
  return <>Hello, {router.query["any"]}!</>;
}
