using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;

namespace WpfApp1.ViewModels
{
    public partial class MainWindowViewModel : ObservableObject
    {
        public NavigationViewModel Nav { get; } = new();

        [ObservableProperty]
        internal SubNavigationViewModel? subNav;

        public HeadlineViewModel Headline { get; } = new();

        [RelayCommand]
        private void SignIn()
        {
            SubNav = new();
            Nav.SignInButtonVisible = false;
        }

        public MainWindowViewModel() => Nav.SignInCommand = SignInCommand;
    }
}
