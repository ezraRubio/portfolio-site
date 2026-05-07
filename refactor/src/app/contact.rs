use leptos::*;
use crate::components::button::Button;
use crate::components::contact_form::ContactForm;
use crate::models::constants::{GITHUB, LINKEDIN};

#[component]
pub fn Contact() -> impl IntoView {
    view! {
        <div class="ml-10 mt-20">
            <div class="flex flex-row space-x-4">
                <Button title="LinkedIn" link=LINKEDIN.to_string() />
                <Button title="GitHub" link=GITHUB.to_string() />
            </div>
            <ContactForm />
        </div>
    }
}
