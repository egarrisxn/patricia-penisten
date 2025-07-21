import LogoutButton from "@/components/admin/logout";

export default function AdminFooter() {
  return (
    <footer className='mx-auto flex w-full items-center justify-center p-4 md:items-end md:justify-end'>
      <LogoutButton />
    </footer>
  );
}
