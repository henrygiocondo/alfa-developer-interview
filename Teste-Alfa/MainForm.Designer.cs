namespace Teste_Alfa
{
    partial class MainForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.menuPrincipal = new System.Windows.Forms.MenuStrip();
            this.menuToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.consultarPessoaHenryToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.incluirPessoaToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.consultarAeroportosDistrictToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.menuPrincipal.SuspendLayout();
            this.SuspendLayout();
            // 
            // menuPrincipal
            // 
            this.menuPrincipal.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.menuToolStripMenuItem});
            this.menuPrincipal.Location = new System.Drawing.Point(0, 0);
            this.menuPrincipal.Name = "menuPrincipal";
            this.menuPrincipal.Size = new System.Drawing.Size(524, 24);
            this.menuPrincipal.TabIndex = 1;
            this.menuPrincipal.Text = "Menu Principal";
            // 
            // menuToolStripMenuItem
            // 
            this.menuToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.consultarPessoaHenryToolStripMenuItem,
            this.incluirPessoaToolStripMenuItem,
            this.consultarAeroportosDistrictToolStripMenuItem});
            this.menuToolStripMenuItem.Name = "menuToolStripMenuItem";
            this.menuToolStripMenuItem.Size = new System.Drawing.Size(50, 20);
            this.menuToolStripMenuItem.Text = "Menu";
            // 
            // consultarPessoaHenryToolStripMenuItem
            // 
            this.consultarPessoaHenryToolStripMenuItem.Name = "consultarPessoaHenryToolStripMenuItem";
            this.consultarPessoaHenryToolStripMenuItem.Size = new System.Drawing.Size(198, 22);
            this.consultarPessoaHenryToolStripMenuItem.Text = "Select People (Henry)";
            this.consultarPessoaHenryToolStripMenuItem.Click += new System.EventHandler(this.SelectPeopleHenryToolStripMenuItem_Click);
            // 
            // incluirPessoaToolStripMenuItem
            // 
            this.incluirPessoaToolStripMenuItem.Name = "incluirPessoaToolStripMenuItem";
            this.incluirPessoaToolStripMenuItem.Size = new System.Drawing.Size(198, 22);
            this.incluirPessoaToolStripMenuItem.Text = "Insert People";
            this.incluirPessoaToolStripMenuItem.Click += new System.EventHandler(this.InsertPeopleToolStripMenuItem_Click);
            // 
            // consultarAeroportosDistrictToolStripMenuItem
            // 
            this.consultarAeroportosDistrictToolStripMenuItem.Name = "consultarAeroportosDistrictToolStripMenuItem";
            this.consultarAeroportosDistrictToolStripMenuItem.Size = new System.Drawing.Size(198, 22);
            this.consultarAeroportosDistrictToolStripMenuItem.Text = "Select Airports (District)";
            this.consultarAeroportosDistrictToolStripMenuItem.Click += new System.EventHandler(this.SelectAirportsDistrictToolStripMenuItem_Click);
            // 
            // MainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(524, 501);
            this.Controls.Add(this.menuPrincipal);
            this.IsMdiContainer = true;
            this.MainMenuStrip = this.menuPrincipal;
            this.Name = "MainForm";
            this.Text = "Teste Alfa - Taylor Martins";
            this.menuPrincipal.ResumeLayout(false);
            this.menuPrincipal.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.MenuStrip menuPrincipal;
        private System.Windows.Forms.ToolStripMenuItem menuToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem consultarPessoaHenryToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem incluirPessoaToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem consultarAeroportosDistrictToolStripMenuItem;
    }
}

