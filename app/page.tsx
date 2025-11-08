import { SettingsTabs } from "./components/SettingsTabs"
import * as Input from "./components/Input"

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-zin-900 text-lg font-medium">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500"
            >
              Save
            </button>
          </div>
        </div>
        <form id="settings" className="mt-6 flex w-full flex-col gap-5">
          <div className="grid-cols-form grid gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            ></label>
            <div className="grid gap-6 grid-cols-2">
              <Input.Root>
              <Input.Control defaultValue="Vanessa" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Gomes" />
              </Input.Root>

            </div>

            <div />
          </div>
        </form>
      </div>
    </>
  )
}
