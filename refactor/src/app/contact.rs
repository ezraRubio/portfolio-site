use leptos::*;
use crate::components::button::Button;
use crate::components::contact_form::ContactForm;
use crate::models::constants::{GITHUB, LINKEDIN};

#[component]
pub fn Contact() -> impl IntoView {
    view! {
        <div class="min-h-screen bg-everforest-bg0 pt-24 px-4">
            <div class="max-w-2xl mx-auto">
                <h1 class="text-4xl md:text-5xl font-bold text-everforest-fg text-center mb-12">Get In Touch</h1>
                <div class="flex flex-row justify-center space-x-4 mb-12">
                    <Button title="LinkedIn" link=LINKEDIN.to_string() />
                    <Button title="GitHub" link=GITHUB.to_string() />
                </div>
                <ContactForm />
            </div>
        </div>
    }
}
