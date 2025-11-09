import { Button } from "../Button"
import { LogOut } from "lucide-react"

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://github.com/vanessagomes-dev.png"
        className="h-10 w-10 rounded-full"
        alt="User Profile"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Vanessa Gomes
        </span>
        <span className="truncate text-sm text-zinc-500">
          vanessagomesdev@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
