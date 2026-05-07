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
            class="bg-blue-500 hover:bg-blue-700 text-white text-center text-xs sm:text-base font-semibold py-2 px-4 rounded"
            on:click=on_click
        >
            {move || if is_pending.get() { "Sending..." } else { "Send" }}
        </button>
    }
}
