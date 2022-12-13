using CommunityToolkit.Mvvm.ComponentModel;
using System;
using System.Timers;

namespace WpfApp1.ViewModels
{
    public partial class HeadlineViewModel : ObservableObject
    {
        public static string[] Actions => new[] { "Build", "Create", "Design", "Code" };
        public static string[] Colors => new[] { "#1a73e8", "#34a853", "#f9ab00", "#d93025" };

        [ObservableProperty]
        private string currentAction = Actions[0];

        [ObservableProperty]
        private string currentColor = Colors[0];

        public HeadlineViewModel()
        {
            Timer timer = new(2000);
            timer.Elapsed += (sender, e) => UpdateAction();
            timer.Start();
        }

        private void UpdateAction()
        {
            int newIndex = (Array.IndexOf(Actions, currentAction) + 1) % Actions.Length;
            CurrentAction = Actions[newIndex];
            CurrentColor = Colors[newIndex];
        }
    }
}