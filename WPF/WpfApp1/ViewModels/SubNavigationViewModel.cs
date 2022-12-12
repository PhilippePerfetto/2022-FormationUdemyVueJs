using CommunityToolkit.Mvvm.ComponentModel;

namespace WpfApp1.ViewModels
{
    public partial class SubNavigationViewModel : ObservableObject
    {
        [ObservableProperty]
        private bool visible = true;
    }
}
