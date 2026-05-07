use leptos::*;
use wasm_bindgen::JsCast;
use gloo_timers::future::TimeoutFuture;
use wasm_bindgen_futures::spawn_local;
use super::submit_form_button::SubmitFormButton;

#[component]
pub fn ContactForm() -> impl IntoView {
    let (is_pending, set_pending) = create_signal(false);

    let on_submit = move |ev: web_sys::SubmitEvent| {
        ev.prevent_default();
        set_pending.set(true);

        let form_el = ev.target().unwrap().dyn_into::<web_sys::HtmlFormElement>().unwrap();
        let form_data = web_sys::FormData::new_with_form(&form_el).unwrap();

        let name = form_data.get("name");
        let mail = form_data.get("mail");
        let message = form_data.get("message");

        log::info!("message from {:?}: {:?}", mail, message);

        spawn_local(async move {
            TimeoutFuture::new(1000).await;
            set_pending.set(false);
            web_sys::window().unwrap().location().set_href("/").unwrap();
        });
    };

    view! {
        <form
            class="mt-20 flex flex-col space-y-2 max-w-xs"
            on:submit=on_submit
        >
            <legend class="text-center">Contact Form</legend>
            <label class="ml-4" id="name">
                "Name:"
                <input required=true id="name" name="name" type="text" class="ml-4 border border-solid rounded" />
            </label>
            <label class="ml-4" id="mail">
                "Mail:"
                <input required=true id="mail" name="mail" type="text" class="ml-4 border border-solid rounded" />
            </label>
            <label class="ml-4" id="message">"Message:"</label>
            <textarea required=true id="message" rows=5 name="message" class="mx-4 border border-solid rounded"></textarea>
            <SubmitFormButton is_pending=is_pending set_pending=set_pending />
        </form>
    }
}
