import { z } from "../../../deps.ts"

export const GET = () => {
    const message = z.string().parse("Hello world");
    return new Response(message)
}