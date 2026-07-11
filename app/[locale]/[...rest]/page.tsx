import { notFound } from "next/navigation";

/** Catch-all: any unknown path inside a valid locale renders the localized 404. */
export default function CatchAll() {
  notFound();
}
