use leptos::*;

#[component]
pub fn Footer() -> impl IntoView {
    view! {
        <footer class="w-full py-4 text-center bg-everforest-bg0 border-t border-everforest-bg2/30">
            <p class="text-everforest-grey0/20 text-[10px] select-none">
                "this site was totally vibe coded dog"
            </p>
        </footer>
    }
}
