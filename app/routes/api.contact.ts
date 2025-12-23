import type { Route } from "./_types/api.contact";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // TODO: Resend APIを使ってメール送信処理を実装
  console.log("Contact form submission:", { name, email, message });

  return Response.json({
    success: true,
    message: "お問い合わせを受け付けました",
  });
}
