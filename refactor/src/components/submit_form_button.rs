use leptos::*;

#[component]
pub fn SubmitFormButton(is_pending: ReadSignal<bool>, set_pending: WriteSignal<bool>) -> impl IntoView {
    let on_click = move |_: web_sys::MouseEvent| {
        set_pending.set(true);
    };

    view! {
        <button
            disabled=is_pending
            type="submit"
            class="w-full bg-everforest-green/90 hover:bg-everforest-green text-everforest-bg0 text-center text-sm font-semibold py-2.5 px-4 rounded-md transition-all duration-200 ease-smooth hover:shadow-lg hover:shadow-everforest-green/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            on:click=on_click
        >
            {move || if is_pending.get() { "Sending..." } else { "Send Message" }}
        </button>
    }
}
