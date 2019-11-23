# frozen_string_literal: true

require "spec_helper"

module Decidim::NavigationMaps::ContentBlocks
  describe NavigationMapSettingsFormCell, type: :cell do
    subject { cell(content_block.cell, content_block).call }

    let(:organization) { create(:organization) }
    let(:content_block) { create :content_block, organization: organization, manifest_name: :navigation_map, scope: :homepage }
    let!(:blueprint) { create(:blueprint, organization: organization) }

    controller Decidim::Admin::ApplicationController

    context "when there are blueprints in the organization" do
      it "contains the map" do
        expect(subject.to_s).to include(blueprint.image.url)
      end
    end
  end
end
