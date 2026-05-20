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
            class="flex flex-col space-y-6 bg-everforest-bg1 border border-everforest-bg3 rounded-lg p-8 shadow-md"
            on:submit=on_submit
        >
            <legend class="text-center text-everforest-fg text-xl font-semibold mb-4">Contact Form</legend>
            <label class="flex flex-col space-y-2">
                <span class="text-everforest-grey2 text-sm font-medium">Name:</span>
                <input required=true id="name" name="name" type="text" class="w-full px-4 py-2.5 bg-everforest-bg2 border border-everforest-bg4 rounded-md text-everforest-fg placeholder-everforest-grey0 focus:outline-none focus:ring-2 focus:ring-everforest-green/50 focus:border-everforest-green transition-all duration-200 ease-smooth" placeholder="Your name" />
            </label>
            <label class="flex flex-col space-y-2">
                <span class="text-everforest-grey2 text-sm font-medium">Email:</span>
                <input required=true id="mail" name="mail" type="email" class="w-full px-4 py-2.5 bg-everforest-bg2 border border-everforest-bg4 rounded-md text-everforest-fg placeholder-everforest-grey0 focus:outline-none focus:ring-2 focus:ring-everforest-green/50 focus:border-everforest-green transition-all duration-200 ease-smooth" placeholder="your@email.com" />
            </label>
            <label class="flex flex-col space-y-2">
                <span class="text-everforest-grey2 text-sm font-medium">Message:</span>
                <textarea required=true id="message" rows=5 name="message" class="w-full px-4 py-2.5 bg-everforest-bg2 border border-everforest-bg4 rounded-md text-everforest-fg placeholder-everforest-grey0 focus:outline-none focus:ring-2 focus:ring-everforest-green/50 focus:border-everforest-green transition-all duration-200 ease-smooth resize-none" placeholder="Your message..."></textarea>
            </label>
            <SubmitFormButton is_pending=is_pending set_pending=set_pending />
        </form>
    }
}
