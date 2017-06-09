System.register(['./collections/aui-form', './elements/aui-button', './elements/aui-label', './elements/aui-icon', './pieces/aui-content', './pieces/aui-field'], function (_export, _context) {
  "use strict";

  var AuiFormCustomElement, AuiButtonCustomElement, AuiLabelCustomElement, AuiIconCustomElement, AuiContentCustomElement, AuiFieldCustomElement;
  function configure(config, options) {
    config.globalResources('./collections/aui-form', './elements/aui-button', './elements/aui-label', './elements/aui-icon', './pieces/aui-content', './pieces/aui-field');
  }

  _export('configure', configure);

  return {
    setters: [function (_collectionsAuiForm) {
      AuiFormCustomElement = _collectionsAuiForm.AuiFormCustomElement;
    }, function (_elementsAuiButton) {
      AuiButtonCustomElement = _elementsAuiButton.AuiButtonCustomElement;
    }, function (_elementsAuiLabel) {
      AuiLabelCustomElement = _elementsAuiLabel.AuiLabelCustomElement;
    }, function (_elementsAuiIcon) {
      AuiIconCustomElement = _elementsAuiIcon.AuiIconCustomElement;
    }, function (_piecesAuiContent) {
      AuiContentCustomElement = _piecesAuiContent.AuiContentCustomElement;
    }, function (_piecesAuiField) {
      AuiFieldCustomElement = _piecesAuiField.AuiFieldCustomElement;
    }],
    execute: function () {
      _export('AuiFormCustomElement', AuiFormCustomElement);

      _export('AuiButtonCustomElement', AuiButtonCustomElement);

      _export('AuiLabelCustomElement', AuiLabelCustomElement);

      _export('AuiIconCustomElement', AuiIconCustomElement);

      _export('AuiContentCustomElement', AuiContentCustomElement);

      _export('AuiFieldCustomElement', AuiFieldCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXJlbGlhLXNlbWFudGljdWkuanMiXSwibmFtZXMiOlsiY29uZmlndXJlIiwiY29uZmlnIiwib3B0aW9ucyIsImdsb2JhbFJlc291cmNlcyIsIkF1aUZvcm1DdXN0b21FbGVtZW50IiwiQXVpQnV0dG9uQ3VzdG9tRWxlbWVudCIsIkF1aUxhYmVsQ3VzdG9tRWxlbWVudCIsIkF1aUljb25DdXN0b21FbGVtZW50IiwiQXVpQ29udGVudEN1c3RvbUVsZW1lbnQiLCJBdWlGaWVsZEN1c3RvbUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7QUFTTyxXQUFTQSxTQUFULENBQW1CQyxNQUFuQixFQUEyQkMsT0FBM0IsRUFBb0M7QUFDekNELFdBQU9FLGVBQVAsQ0FDRSx3QkFERixFQUdFLHVCQUhGLEVBSUUsc0JBSkYsRUFLRSxxQkFMRixFQU9FLHNCQVBGLEVBUUUsb0JBUkY7QUFVRDs7dUJBWGVILFM7Ozs7QUFUUEksMEIsdUJBQUFBLG9COztBQUVBQyw0QixzQkFBQUEsc0I7O0FBQ0FDLDJCLHFCQUFBQSxxQjs7QUFDQUMsMEIsb0JBQUFBLG9COztBQUVBQyw2QixxQkFBQUEsdUI7O0FBQ0FDLDJCLG1CQUFBQSxxQjs7O3NDQWdCUEwsb0I7O3dDQUVBQyxzQjs7dUNBQ0FDLHFCOztzQ0FDQUMsb0I7O3lDQUVBQyx1Qjs7dUNBQ0FDLHFCIiwiZmlsZSI6ImF1cmVsaWEtc2VtYW50aWN1aS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdWlGb3JtQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4vY29sbGVjdGlvbnMvYXVpLWZvcm0nO1xuXG5pbXBvcnQgeyBBdWlCdXR0b25DdXN0b21FbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cy9hdWktYnV0dG9uJztcbmltcG9ydCB7IEF1aUxhYmVsQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4vZWxlbWVudHMvYXVpLWxhYmVsJztcbmltcG9ydCB7IEF1aUljb25DdXN0b21FbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cy9hdWktaWNvbic7XG5cbmltcG9ydCB7IEF1aUNvbnRlbnRDdXN0b21FbGVtZW50IH0gZnJvbSAnLi9waWVjZXMvYXVpLWNvbnRlbnQnO1xuaW1wb3J0IHsgQXVpRmllbGRDdXN0b21FbGVtZW50IH0gZnJvbSAnLi9waWVjZXMvYXVpLWZpZWxkJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWcsIG9wdGlvbnMpIHtcbiAgY29uZmlnLmdsb2JhbFJlc291cmNlcyhcbiAgICAnLi9jb2xsZWN0aW9ucy9hdWktZm9ybScsXG5cbiAgICAnLi9lbGVtZW50cy9hdWktYnV0dG9uJyxcbiAgICAnLi9lbGVtZW50cy9hdWktbGFiZWwnLFxuICAgICcuL2VsZW1lbnRzL2F1aS1pY29uJyxcblxuICAgICcuL3BpZWNlcy9hdWktY29udGVudCcsXG4gICAgJy4vcGllY2VzL2F1aS1maWVsZCdcbiAgKTtcbn1cblxuZXhwb3J0IHtcbiAgQXVpRm9ybUN1c3RvbUVsZW1lbnQsXG4gIFxuICBBdWlCdXR0b25DdXN0b21FbGVtZW50LFxuICBBdWlMYWJlbEN1c3RvbUVsZW1lbnQsXG4gIEF1aUljb25DdXN0b21FbGVtZW50LFxuXG4gIEF1aUNvbnRlbnRDdXN0b21FbGVtZW50LFxuICBBdWlGaWVsZEN1c3RvbUVsZW1lbnRcbn07XG4iXX0=