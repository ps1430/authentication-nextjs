
//import styles from '@/styles/Home.module.css';
import { useSession, signIn, signOut } from "next-auth/react";


export default function Home() {
  const session = useSession();
  console.log('Session',session)
  if (session.data === null) {
    return <button onClick = {signIn}>Login</button>
  }
  return (
    <div>
      <h1>Hello {session?.data?.user?.name}</h1>
      <button onClick = {signOut}>LogOut</button>
    </div>
  );
}
