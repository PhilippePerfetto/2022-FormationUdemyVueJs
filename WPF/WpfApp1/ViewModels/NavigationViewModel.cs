using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;

namespace WpfApp1.ViewModels
{
    public partial class NavigationViewModel : ObservableObject
    {
        public static string[] Menu => new string[] { "Teams", "Locations", "Life at Bobo Corp", "How we hire", "Students", "Jobs" }; // Strings !!! => resources/config

        [ObservableProperty]
        private bool signInButtonVisible = true;

        public IRelayCommand? SignInCommand { get; internal set; }
    }
}
