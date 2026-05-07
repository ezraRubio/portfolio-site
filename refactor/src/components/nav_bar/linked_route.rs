use leptos::*;
use leptos_router::*;
use super::helpers::{get_href, get_text};

#[component]
pub fn LinkedRoute(route: &'static str, set_open: WriteSignal<bool>) -> impl IntoView {
    let href = get_href(route);
    let text = get_text(route);

    view! {
        <li>
            <A
                href=href
                class="px-4 py-2 font-semibold text-xl text-gray-600 rounded"
                on:click=move |_| set_open.update(|v| *v = !*v)
            >
                {text}
            </A>
        </li>
    }
}
