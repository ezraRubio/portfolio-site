use leptos::*;

#[component]
pub fn Button(title: &'static str, link: String) -> impl IntoView {
    view! {
        <a
            href=link
            class="bg-blue-500 hover:bg-blue-700 text-white text-center text-xs sm:text-base font-semibold py-2 px-4 rounded"
            target="_blank"
        >
            {title}
        </a>
    }
}
