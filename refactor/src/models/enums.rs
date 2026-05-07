pub enum Routes {
    Home,
    Projects,
    Contact,
}

impl Routes {
    pub fn as_str(&self) -> &'static str {
        match self {
            Routes::Home => "Home",
            Routes::Projects => "Projects",
            Routes::Contact => "Contact",
        }
    }
}

impl std::fmt::Display for Routes {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.as_str())
    }
}

pub enum ButtonOptions {
    Click,
    Code,
    Download,
    LinkedIn,
    GitHub,
    Send,
    Sending,
}

impl ButtonOptions {
    pub fn as_str(&self) -> &'static str {
        match self {
            ButtonOptions::Click => "Click Here to open",
            ButtonOptions::Code => "Check out the code",
            ButtonOptions::Download => "Download",
            ButtonOptions::LinkedIn => "LinkedIn",
            ButtonOptions::GitHub => "GitHub",
            ButtonOptions::Send => "Send",
            ButtonOptions::Sending => "Sending...",
        }
    }
}

impl std::fmt::Display for ButtonOptions {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.as_str())
    }
}
