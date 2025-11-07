import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/vanessagomes-dev.png"
        className="h-10 w-10 rounded-full"
        alt="User Profile"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Vanessa Gomes
        </span>
        <span className="truncate text-sm text-zinc-500">vanessagomesdev@gmail.com</span>
      </div>
      <button type="button" className="ml-auto p-2 rounded-md hover:bg-zinc-50">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </button>
    </div>
  )
}
