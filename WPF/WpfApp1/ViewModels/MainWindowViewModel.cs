namespace WpfApp1.ViewModels
{
    public class MainWindowViewModel
    {
        public NavigationViewModel Nav { get; } = new();
        public SubNavigationViewModel SubNav { get; } = new();
    }
}
