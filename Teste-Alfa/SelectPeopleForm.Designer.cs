namespace Teste_Alfa
{
    partial class SelectPeopleForm
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
            this.btnClose = new System.Windows.Forms.Button();
            this.btnSelect = new System.Windows.Forms.Button();
            this.lblUserName = new System.Windows.Forms.Label();
            this.txbUserName = new System.Windows.Forms.TextBox();
            this.lbUserNames = new System.Windows.Forms.ListBox();
            this.SuspendLayout();
            // 
            // btnClose
            // 
            this.btnClose.Location = new System.Drawing.Point(411, 415);
            this.btnClose.Name = "btnClose";
            this.btnClose.Size = new System.Drawing.Size(75, 23);
            this.btnClose.TabIndex = 0;
            this.btnClose.Text = "Close";
            this.btnClose.UseVisualStyleBackColor = true;
            this.btnClose.Click += new System.EventHandler(this.btnClose_Click);
            // 
            // btnSelect
            // 
            this.btnSelect.Location = new System.Drawing.Point(12, 415);
            this.btnSelect.Name = "btnSelect";
            this.btnSelect.Size = new System.Drawing.Size(75, 23);
            this.btnSelect.TabIndex = 2;
            this.btnSelect.Text = "Select";
            this.btnSelect.UseVisualStyleBackColor = true;
            this.btnSelect.Click += new System.EventHandler(this.btnSelect_Click);
            // 
            // lblUserName
            // 
            this.lblUserName.AutoSize = true;
            this.lblUserName.Location = new System.Drawing.Point(13, 19);
            this.lblUserName.Name = "lblUserName";
            this.lblUserName.Size = new System.Drawing.Size(60, 13);
            this.lblUserName.TabIndex = 3;
            this.lblUserName.Text = "UserName:";
            // 
            // txbUserName
            // 
            this.txbUserName.Location = new System.Drawing.Point(79, 16);
            this.txbUserName.Name = "txbUserName";
            this.txbUserName.Size = new System.Drawing.Size(100, 20);
            this.txbUserName.TabIndex = 4;
            this.txbUserName.Text = "henry";
            // 
            // lbUserNames
            // 
            this.lbUserNames.FormattingEnabled = true;
            this.lbUserNames.Location = new System.Drawing.Point(301, 12);
            this.lbUserNames.Name = "lbUserNames";
            this.lbUserNames.Size = new System.Drawing.Size(185, 381);
            this.lbUserNames.TabIndex = 5;
            // 
            // FormConsultarPessoa
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(498, 450);
            this.Controls.Add(this.lbUserNames);
            this.Controls.Add(this.txbUserName);
            this.Controls.Add(this.lblUserName);
            this.Controls.Add(this.btnSelect);
            this.Controls.Add(this.btnClose);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Location = new System.Drawing.Point(10, 10);
            this.Name = "FormConsultarPessoa";
            this.StartPosition = System.Windows.Forms.FormStartPosition.Manual;
            this.Text = "FormConsultarPessoa";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btnClose;
        private System.Windows.Forms.Button btnSelect;
        private System.Windows.Forms.Label lblUserName;
        private System.Windows.Forms.TextBox txbUserName;
        private System.Windows.Forms.ListBox lbUserNames;
    }
}