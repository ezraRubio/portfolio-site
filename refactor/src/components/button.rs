use leptos::*;

#[component]
pub fn Button(title: &'static str, link: String) -> impl IntoView {
    view! {
        <a
            href=link
            class="inline-block bg-everforest-green/90 hover:bg-everforest-green text-everforest-bg0 text-center text-xs sm:text-sm font-semibold py-2.5 px-5 rounded-md transition-all duration-200 ease-smooth hover:shadow-lg hover:shadow-everforest-green/20 hover:-translate-y-0.5"
            target="_blank"
        >
            {title}
        </a>
    }
}
