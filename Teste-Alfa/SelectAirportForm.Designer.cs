namespace Teste_Alfa
{
    partial class SelectAirportForm
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
            this.lblAddressFilter = new System.Windows.Forms.Label();
            this.txbAddressFilter = new System.Windows.Forms.TextBox();
            this.button1 = new System.Windows.Forms.Button();
            this.btnClose = new System.Windows.Forms.Button();
            this.dgvAirports = new System.Windows.Forms.DataGridView();
            this.Airport = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.IcaoCode = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.IataCode = new System.Windows.Forms.DataGridViewTextBoxColumn();
            ((System.ComponentModel.ISupportInitialize)(this.dgvAirports)).BeginInit();
            this.SuspendLayout();
            // 
            // lblAddressFilter
            // 
            this.lblAddressFilter.AutoSize = true;
            this.lblAddressFilter.Location = new System.Drawing.Point(21, 19);
            this.lblAddressFilter.Name = "lblAddressFilter";
            this.lblAddressFilter.Size = new System.Drawing.Size(73, 13);
            this.lblAddressFilter.TabIndex = 0;
            this.lblAddressFilter.Text = "Address Filter:";
            // 
            // txbAddressFilter
            // 
            this.txbAddressFilter.Location = new System.Drawing.Point(100, 16);
            this.txbAddressFilter.Name = "txbAddressFilter";
            this.txbAddressFilter.Size = new System.Drawing.Size(100, 20);
            this.txbAddressFilter.TabIndex = 1;
            this.txbAddressFilter.Text = "District";
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(24, 415);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(75, 23);
            this.button1.TabIndex = 3;
            this.button1.Text = "Filter";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.btnFilter_Click);
            // 
            // btnClose
            // 
            this.btnClose.Location = new System.Drawing.Point(398, 415);
            this.btnClose.Name = "btnClose";
            this.btnClose.Size = new System.Drawing.Size(75, 23);
            this.btnClose.TabIndex = 4;
            this.btnClose.Text = "Close";
            this.btnClose.UseVisualStyleBackColor = true;
            this.btnClose.Click += new System.EventHandler(this.btnClose_Click);
            // 
            // dgvAirports
            // 
            this.dgvAirports.AllowUserToAddRows = false;
            this.dgvAirports.AllowUserToDeleteRows = false;
            this.dgvAirports.AllowUserToOrderColumns = true;
            this.dgvAirports.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dgvAirports.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.Airport,
            this.IcaoCode,
            this.IataCode});
            this.dgvAirports.Location = new System.Drawing.Point(24, 42);
            this.dgvAirports.Name = "dgvAirports";
            this.dgvAirports.ReadOnly = true;
            this.dgvAirports.Size = new System.Drawing.Size(449, 367);
            this.dgvAirports.TabIndex = 5;
            // 
            // Airport
            // 
            this.Airport.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.Airport.HeaderText = "Airport";
            this.Airport.Name = "Airport";
            this.Airport.ReadOnly = true;
            // 
            // IcaoCode
            // 
            this.IcaoCode.HeaderText = "IcaoCode";
            this.IcaoCode.Name = "IcaoCode";
            this.IcaoCode.ReadOnly = true;
            // 
            // IataCode
            // 
            this.IataCode.HeaderText = "IataCode";
            this.IataCode.Name = "IataCode";
            this.IataCode.ReadOnly = true;
            // 
            // SelectAirportForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(498, 450);
            this.Controls.Add(this.dgvAirports);
            this.Controls.Add(this.btnClose);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.txbAddressFilter);
            this.Controls.Add(this.lblAddressFilter);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Location = new System.Drawing.Point(10, 10);
            this.Name = "SelectAirportForm";
            this.StartPosition = System.Windows.Forms.FormStartPosition.Manual;
            this.Text = "SelectAirportForm";
            ((System.ComponentModel.ISupportInitialize)(this.dgvAirports)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label lblAddressFilter;
        private System.Windows.Forms.TextBox txbAddressFilter;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Button btnClose;
        private System.Windows.Forms.DataGridView dgvAirports;
        private System.Windows.Forms.DataGridViewTextBoxColumn Airport;
        private System.Windows.Forms.DataGridViewTextBoxColumn IcaoCode;
        private System.Windows.Forms.DataGridViewTextBoxColumn IataCode;
    }
}